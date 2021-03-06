import axios, { AxiosInstance } from "axios";
import { IncomingMessage, ServerResponse } from "http";
import { GetServerSidePropsContext, NextPageContext } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

const BASE_URL = "https://jsonplaceholder.typicode.com";

type CtxReq = IncomingMessage & {
  cookies: NextApiRequestCookies;
};

export default class Service {
  private static token: string;
  private static instance: AxiosInstance;

  static getToken() {
    return this.token;
  }

  static setToken(req: CtxReq) {
    this.token = req.cookies.auth;
  }

  static setReqInterceptor(req: CtxReq) {
    this.setToken(req);

    this.instance.interceptors.request.use((reqConfig) => {
      if (reqConfig.headers && this.token) {
        reqConfig.headers["authentication"] = this.token;
      }
      return reqConfig;
    });
  }

  static setResInterceptor(ctxRes: ServerResponse) {
    this.instance.interceptors.response.use((res) => {
      const refresh = res.headers["x-refresh-token"]!;
      if (refresh) {
        ctxRes?.setHeader("set-cookie", "auth=" + refresh);
      }
      return res;
    }, this.errorHandler);
  }

  static errorHandler() {}

  static getInstance() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 3000,
    });
    return this.instance;
  }
}
