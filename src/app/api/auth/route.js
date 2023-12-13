import { config } from "@/app/config";
import { signin } from "@/data/auth";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

export async function GET(request) {
  const greeting = "Hello World!!";
  const json = {
    greeting,
  };

  return NextResponse.json(json);
}

export async function POST(request) {
  const data = await request.json();
  let json = null;
  try {
    json = await signin(data);
    if (json.user) {
      json.user.urlImage = `${config.API_SERVER}:${config.API_PORT}${json.user.image}`;
    }
  } catch (error) {
    json = {status:error};
    console.log("POST error ->", json);
  }

  return NextResponse.json(json);
}