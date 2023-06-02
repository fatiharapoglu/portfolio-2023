import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/client";

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();

    try {
        await prisma.message.create({
            data: {
                fromEmail: email,
                fromName: name,
                text: message,
            },
        });
        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        return NextResponse.json({ success: false, error });
    }
}
