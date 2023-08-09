function openMtz(mtz) {
        var container = mtz.parentNode.parentNode;
        var rows = container.querySelectorAll('.matriz-row');

        mtz.classList.toggle('pulse');

        for (let i = 0; i < rows.length; i++) {
            if(!rows[i].classList.contains('mtz-disable')){
                rows[i].classList.toggle('mtz-visible');
            }
            
        }


}