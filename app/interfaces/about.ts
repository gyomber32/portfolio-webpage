type Image = {
    src: string;
    alt: string
}

type AboutImages = { [key: string]: Image[] };

export type { AboutImages };