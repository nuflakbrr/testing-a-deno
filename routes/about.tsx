/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello World");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>Halo Ini About Page</h1>
      <p>YAHAHAHAHA WAHYUUU</p>
    </main>
  );
}
