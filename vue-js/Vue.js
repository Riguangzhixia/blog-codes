import Compiler from "./Compiler";
import Observer from "./Observer";

class Vue{
    constructor(options){
        this.$options = options
        this.$el = this.options.el
        this.$_data = this.options.$_data
        Object.keys(this._data).forEach(
            key =>{
                this._proxy(key)
            }
        )
        new Observer(this._data)
        new Compiler(this.$el,this)
    }
    _proxy(key){
        var self = this
        Object.definePropertiy(this.key,{
            get(value){},
            set(value){
                self._data[key] = value
            }
        })
    }
}

export default Vue