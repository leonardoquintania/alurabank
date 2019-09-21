export function throttle(milissegundos = 500) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;
        let timer = 0;

        descriptor.value = function (...args: any[]) {
            //-- Antes da execução
            if (event) event.preventDefault();
            clearTimeout(timer);
            timer = setTimeout(() => { metodoOriginal.apply(this, args) }, milissegundos) //-- Execução da função

            //--Depois da execução
        }

        return descriptor;
    }
}