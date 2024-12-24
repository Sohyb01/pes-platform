import { renderToStream } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import Resume from "./Resume";

export const GET = async () => {
  const userDetails = {
    name: "John Doe",
    projects: ["Project A", "Project B", "Project C"],
    certificates: ["Certificate 1", "Certificate 2"],
    credentials: ["AWS Certified Developer", "Google Cloud Architect"],
  };

  const stream = await renderToStream(<Resume {...userDetails} />);
  return new NextResponse(stream as unknown as ReadableStream);
};
