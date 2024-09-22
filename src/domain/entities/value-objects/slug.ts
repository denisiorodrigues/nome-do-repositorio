export class Slug {
    public value: string

    constructor(value: string) {
        this.value = value
    }

    /**
     * Receives a string and normalize it as a slug.
     * 
     * Exemple: "An example title" => "an-example-text"
     * 
     * @param text {string}
     */
    static createFromText(text: string) {
        const slugText = text
            .normalize("NFKD")
            .toLocaleLowerCase()
            .trim()
            .replace(/\s+/g, '-') // remove os espaços em branco. O 'g' é pra pegar tudo, se não houvesse faria o replace somente no primeiro
            .replace(/[^\w-]+/g, '')
            .replace(/_/g, '-')// Seleiona todas os undercors e substitui por hifen
            .replace(/--+/g, '-') // Dois hifens por um
            .replace(/-$/g, '-') // Se no final ter hifens e substitui por nada. é o final da string

        return new Slug(slugText)
    }
}