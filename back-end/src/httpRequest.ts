import https from "https";

export function get<T>(url: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    https.get(url, response => {
      response.setEncoding("utf8");
      let body = "";
      response.on("data", data => {
        body += data;
      });
      response.on("end", () => {
        resolve(JSON.parse(body));
      });
    }).on('error', reject);
  });
}