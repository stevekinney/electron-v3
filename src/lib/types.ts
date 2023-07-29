export type Content = (Section | Post)[];

export type Section = {
	title: string;
	content: Content;
	slug?: never;
};

export type Post = {
	title: string;
	slug: string;
	content?: never;
};
