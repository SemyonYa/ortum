import { trigger, transition, style, animate } from '@angular/animations';

export const callMeAnimation =
    trigger('callMeAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(50vw)',
                opacity: 0
            }),
            animate('.3s ease-out',
                style({
                    transform: '*',
                    opacity: '*'
                }))
        ]),
        transition(':leave', [
            style({
                transform: '*',
                opacity: '*'
            }),
            animate('.3s ease-out',
                style({
                    transform: 'translateX(50vw)',
                    opacity: 0
                }))
        ])
    ]);
