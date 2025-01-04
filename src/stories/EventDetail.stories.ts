import type { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";

import EventDetails from "@/components/events/EventDetails";

type EventDetailProps = ComponentProps<typeof EventDetails>;

const meta: Meta<EventDetailProps> = {
    component: EventDetails
};

export default meta;

type Story = StoryObj<EventDetailProps>;

export const Default: Story = {};
