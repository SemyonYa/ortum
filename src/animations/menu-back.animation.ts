import { trigger, transition, style, animate } from '@angular/animations';

export const menuBackAnimation =
    trigger('menuBackAnimation', [
        transition(':enter', [
            style({
                opacity: 0
            }),
            animate('.3s ease-in-out',
                style({
                    opacity: '*'
                })
            )
        ]),
        transition(':leave', [
            style({
                opacity: '*'
            }),
            animate('.3s ease-in-out',
                style({
                    opacity: 0
                })
            )
        ])
    ]);
