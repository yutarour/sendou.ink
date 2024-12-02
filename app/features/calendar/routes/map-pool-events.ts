import * as CalendarRepository from "~/features/calendar/CalendarRepository.server";
import type { SerializeFrom } from "../../../utils/remix";

export const loader = async () => {
	return {
		events: await CalendarRepository.allEventsWithMapPools(),
	};
};

export type EventsWithMapPoolsLoaderData = SerializeFrom<typeof loader>;
export type SerializedMapPoolEvent =
	EventsWithMapPoolsLoaderData["events"][number];
