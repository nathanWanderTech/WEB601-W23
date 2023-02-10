import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appHoverAffect]',
})
export class HoverAffectDirective implements OnInit {
	constructor(private el: ElementRef) {}

	@Input() affectName: 'underline' | 'boldText' = 'boldText';

	@HostListener('mouseenter') onMouseEnter() {
		switch (this.affectName) {
			case 'underline':
				this.underline('visible');
				break;
			case 'boldText':
				this.boldText(true);
				break;
			default:
				break;
		}
	}

	@HostListener('mouseleave') onMouseLeave() {
		switch (this.affectName) {
			case 'underline':
				this.underline('invisible');
				break;
			case 'boldText':
				this.boldText(false);
				break;
			default:
				break;
		}
	}

	private underline(visible: 'visible' | 'invisible') {
		if (visible === 'visible') this.el.nativeElement.style.borderBottom = '1px solid black';
		else this.el.nativeElement.style.borderBottom = 'none';
	}

	private boldText(bold: boolean) {
		if (bold === true) {
      this.el.nativeElement.style.fontWeight = 700;
      this.el.nativeElement.style.boxShadow = 'red -3px 6px 3px';
    } else {
      this.el.nativeElement.style.fontWeight = 400;
      this.el.nativeElement.style.boxShadow = 'none';

    }
	}



	ngOnInit(): void {
		
	}
}
