import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        const { action, counterId } = body;

        console.log( `${ action === "increment" ? "Hurray!" : "Oh no!" } Counter ${counterId} ${action}ed` );
        // Simulate some operation on the server
    return NextResponse.json({
        success: true,
        data: { action, counterId },
    });
} catch (error) {
    return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
    );
}
}
