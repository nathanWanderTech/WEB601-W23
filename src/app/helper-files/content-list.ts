import { Content } from "./content-interface";

class ContentList {
	private contentList: Content[];

	constructor() {
		this.contentList = [];
	}

  /**
   * Getter Content array
   * @returns 
   */
	getContentList(): Content[] {
		return this.contentList;
	}

  /**
   * Adds 1 Content item to the end of the array
   * @param content 
   * @returns 
   */
  addContent(content: Content): Content[] {
    this.contentList.push(content);
    return this.contentList;
  }

  /**
   * Count number of items in the array
   * @returns 
   */
  countContents(): number {
    return this.contentList.length;
  }

  generateHtmlByIndex(index: number) : string {
    const content : Content | undefined = this.contentList[index];
    if(!content) return '';
    
    return `<p>Title: ${content.title}</p>
    <p>Description: ${content.description}</p>
    <p>Creator: ${content.creator}</p>
    <p>Image: <img src="${content.imgURL}" alt=""></p>`
  }
}
