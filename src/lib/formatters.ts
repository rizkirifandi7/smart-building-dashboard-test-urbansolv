/**
 * Utility functions for data formatting
 */

/**
 * Format number with thousand separators
 * @param num - Number to format
 * @returns Formatted string with commas
 */
export const formatNumber = (num: number): string => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Format temperature value
 * @param temp - Temperature value
 * @param decimals - Number of decimal places
 * @returns Formatted temperature string
 */
export const formatTemperature = (temp: number, decimals: number = 1): string => {
	return `${temp.toFixed(decimals)}°C`;
};

/**
 * Format CO2 value
 * @param co2 - CO2 value in ppm
 * @returns Formatted CO2 string
 */
export const formatCO2 = (co2: number): string => {
	return `${co2} ppm`;
};

/**
 * Format energy value
 * @param kwh - Energy value in kWh
 * @returns Formatted energy string
 */
export const formatEnergy = (kwh: number): string => {
	return `${formatNumber(kwh)} kWh`;
};
