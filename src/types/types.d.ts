export interface Breakpoints {
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
	xxl: boolean;
}

export interface ContentMap {
	[key: string]: React.ReactNode;
}

export interface Service {
	title: string;
	text: string;
	icon: string;
}

export interface EmailReqBody {
	to: string;
	subject: string;
	text: string;
}
