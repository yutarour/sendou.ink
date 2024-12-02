import type {
	ShouldRevalidateFunctionArgs,
	useLoaderData,
} from "@remix-run/react";

export function isRevalidation(args: ShouldRevalidateFunctionArgs) {
	return (
		args.defaultShouldRevalidate && args.nextUrl.href === args.currentUrl.href
	);
}

// https://remix.run/docs/en/main/start/future-flags#serializefrom
export type SerializeFrom<T> = ReturnType<typeof useLoaderData<T>>;
