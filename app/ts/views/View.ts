import { logarTempoDeExecucao } from '../helpers/decorators/logarTempoDeExecucao'
export abstract class View<T> {
    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(selector: string, escapar: boolean = false) {

        this._elemento = $(selector);
        this._escapar = escapar;
    }
    @logarTempoDeExecucao()
    update(model: T) {

        let template = this.template(model)
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);
    }

    abstract template(model: T): string;
}