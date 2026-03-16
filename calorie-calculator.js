(function() {
    var gender = 'male';
    var ageEl = document.getElementById('calAge');
    var weightEl = document.getElementById('calWeight');
    var heightEl = document.getElementById('calHeight');
    var activityEl = document.getElementById('calActivity');
    var maintainEl = document.getElementById('calMaintain');
    var lossEl = document.getElementById('calLoss');
    var gainEl = document.getElementById('calGain');
    var bmrEl = document.getElementById('calBMR');

    function calculate() {
        var age = parseFloat(ageEl.value) || 0;
        var w = parseFloat(weightEl.value) || 0;
        var h = parseFloat(heightEl.value) || 0;
        var activity = parseFloat(activityEl.value) || 1.55;
        if (age <= 0 || w <= 0 || h <= 0) {
            maintainEl.textContent = '--'; lossEl.textContent = '--'; gainEl.textContent = '--'; bmrEl.textContent = '--'; return;
        }
        // Mifflin-St Jeor
        var bmr;
        if (gender === 'male') {
            bmr = 10 * w + 6.25 * h - 5 * age + 5;
        } else {
            bmr = 10 * w + 6.25 * h - 5 * age - 161;
        }
        var tdee = bmr * activity;
        maintainEl.textContent = Math.round(tdee).toLocaleString() + ' cal';
        lossEl.textContent = Math.round(tdee - 500).toLocaleString() + ' cal';
        gainEl.textContent = Math.round(tdee + 500).toLocaleString() + ' cal';
        bmrEl.textContent = Math.round(bmr).toLocaleString() + ' cal/day';
    }

    document.getElementById('calMale').addEventListener('click', function() {
        gender = 'male';
        this.classList.add('calcal-toggle-active');
        document.getElementById('calFemale').classList.remove('calcal-toggle-active');
        calculate();
    });
    document.getElementById('calFemale').addEventListener('click', function() {
        gender = 'female';
        this.classList.add('calcal-toggle-active');
        document.getElementById('calMale').classList.remove('calcal-toggle-active');
        calculate();
    });

    [ageEl, weightEl, heightEl].forEach(function(el) { el.addEventListener('input', calculate); });
    activityEl.addEventListener('change', calculate);
})();
