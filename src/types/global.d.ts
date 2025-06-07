declare global {
    interface HTMLElementTagNameMap {
        'swiper-container': NgElement & WithProperties<{ content: string }>;
        'swiper-slide': NgElement & WithProperties<{ foo: 'bar' }>;
    }
}
