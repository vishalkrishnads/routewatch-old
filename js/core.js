import { toast } from './ui.js'

document.addEventListener('DOMContentLoaded', () => {
    let from = null, to = null;

    const process = () => {
        if(from != null && to != null) {
            toast('fetching routes', 'working')
            setTimeout(() => toast(), 2000)
        }
    }

    document.getElementById('from').addEventListener('change', function() {
        if(!this.value) from = null;
        else from  = this.value;
        process()
    })

    document.getElementById('to').addEventListener('change', function() {
        if(!this.value) to = null;
        else to = this.value;
        process()
    })
})