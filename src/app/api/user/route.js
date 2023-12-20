import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function GET(request, { params }) {
  const token = cookies().get("token");
  const uid = cookies().get("uid");

  console.log("token ->", token);
  console.log("token ->", uid);

  const user = { name: "cadorna" };
  return NextResponse.json(user);
}
