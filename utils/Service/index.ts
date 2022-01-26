import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IncomingMessage } from "http";
import { NextPageContext } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import Cookie from "../Cookie";

export default class Service {
  private static token: string;
  private static instance: AxiosInstance;

  static getToken() {
    return this.token;
  }

  static setToken(ctx: NextPageContext) {
    const req = ctx.req as IncomingMessage & {
      cookies: NextApiRequestCookies;
    };
    this.token = req.cookies.auth;
  }

  static setReqInterceptor() {
    this.instance.interceptors.request.use((reqConfig) => {
      if (reqConfig.headers && this.token) {
        reqConfig.headers["authentication"] = this.token;
      }
      return reqConfig;
    });
  }

  static setResInterceptor(ctx: NextPageContext) {
    this.instance.interceptors.response.use((res) => {
      const refresh = res.headers["x-refresh-token"]!;
      if (refresh) {
        console.log(refresh);
        ctx.res?.setHeader("set-cookie", "auth=" + refresh);
      }
      return res;
    });
  }

  static setInstance() {
    this.instance = axios.create({});
  }

  static getInstance() {
    return this.instance;
  }
}
