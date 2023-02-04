import { Content } from './content-interface';

export interface SearchContent {
	title?: string;
}

export interface SearchResults {
	total: number;
	results: Content[];
}
