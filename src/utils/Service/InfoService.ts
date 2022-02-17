import { GetServerSidePropsContext } from "next";
import Service from ".";

class InfoService {
  static async get(ctx: GetServerSidePropsContext) {
    const { data } = await Service.getInstance().get(
      "http://localhost:3000/api/info"
    );
    return data;
  }
}

export default InfoService;
