import { Workplace } from "./workplace";
import { AboutImages } from "./about";

type NavItem = {
    title: string,
    href: string
}

type Technology = {
    name: string,
    src: string,
    alt: string,
    href: string
}

type ContactItem = {
    name?: string;
    href: string;
    iconSrc: string;
    alt?: string;
    target?: "_blank";
    rel?: "noopener noreferrer";
};

export type { AboutImages, ContactItem, NavItem, Technology, Workplace }