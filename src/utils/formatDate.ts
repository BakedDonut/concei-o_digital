export function formatDate(date: Date | string): string {
    if (!date) {
        return 'Data inválida'; 
    }

    const parsedDate = typeof date === 'string' ? new Date(date) : date;

    if (isNaN(parsedDate.getTime())) {
        return 'Data inválida'; 
    }

    const day = String(parsedDate.getDate()).padStart(2, '0');
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const year = parsedDate.getFullYear();

    return `${day}/${month}/${year}`;
}

export function formatDateToISO(date: string): string {
    if (!date) {
        return 'Data inválida'; 
    }

    const [day, month, year] = date.split('/').map(Number);
    const parsedDate = new Date(year, month - 1, day); // Mês começa em 0

    if (isNaN(parsedDate.getTime())) {
        return 'Data inválida'; 
    }

    const formattedDate = parsedDate.toISOString().split('T')[0]; // Converte para formato ISO e pega a parte da data
    return formattedDate; // Retorna a data no formato YYYY-MM-DD
}
