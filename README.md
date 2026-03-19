# Calorie Calculator

Estimate daily calorie needs using the Mifflin-St Jeor equation for BMR and TDEE with activity level multipliers, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/calculators/calorie-calculator-online

## How It Works

Basal Metabolic Rate is calculated with the Mifflin-St Jeor formula: `BMR = 10*weight(kg) + 6.25*height(cm) - 5*age + S`, where `S` is `+5` for male and `-161` for female. Total Daily Energy Expenditure is then `TDEE = BMR * activityFactor`, where the factor ranges from 1.2 (sedentary) to 1.9 (extra active). The calculator displays calorie targets for five goals: maintenance (TDEE), mild weight loss (TDEE - 250), weight loss (TDEE - 500), mild weight gain (TDEE + 250), and weight gain (TDEE + 500). If imperial units are selected, pounds are converted to kg (`lbs / 2.205`) and inches to cm (`in * 2.54`) before applying the formula.

## Features

- Mifflin-St Jeor BMR: `10*w + 6.25*h - 5*age ± gender constant`
- TDEE = BMR × activity factor (5 levels: sedentary to extra active)
- Male and female gender toggle
- Metric (kg/cm) and imperial (lb/in) unit support
- Five calorie goal presets displayed simultaneously

## Browser APIs Used

- (No external APIs — pure DOM arithmetic)

## Code Structure

| File | Description |
|------|-------------|
| `calorie-calculator.js` | Mifflin-St Jeor BMR formula, TDEE = BMR * activityFactor (1.2–1.9), imperial unit conversion, 5-goal output |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| `#clcAge` | Age input |
| `#clcWeight` | Weight input |
| `#clcHeight` | Height input |
| `#clcGender` | Male/female selector |
| `#clcActivity` | Activity level selector |
| `#clcUnit` | Metric/imperial toggle |
| `#clcCalc` | Calculate button |
| `#clcBmr` | BMR display |
| `#clcMaintenance`, `#clcMildLoss`, `#clcLoss`, `#clcMildGain`, `#clcGain` | Goal calorie displays |

## License

MIT
