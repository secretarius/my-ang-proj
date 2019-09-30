import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appBackground]' 
})

export class BackgroundDirective implements OnInit{
    @Input('appBackground') hoverColor: string = 'green';
    @Input() defaultColor: string = 'transparent';
    @HostBinding('style.backgroundColor') background: string;

    // constructor(private element: ElementRef, private renderer: Renderer2 ) { }

    ngOnInit() {
        this.background = this.defaultColor;
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        // this.renderer.addClass(this.element.nativeElement, 'white-text');
    }

    @HostListener('mouseenter') mouseEnter() {
        this.background = this.hoverColor;
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
        // this.renderer.addClass(this.element.nativeElement, 'white-text');
    }

    @HostListener('mouseleave') mouseLeave() {
        this.background = this.defaultColor
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        // this.renderer.addClass(this.element.nativeElement, 'white-text');
    }
}