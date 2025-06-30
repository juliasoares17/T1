export function formatarData(data: Date): string {
    const opcoes: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'long'
    }

    let dataFormatada = data.toLocaleDateString('pt-BR', opcoes)

    const regexZona = /(Horário.*)$/i
    const match = dataFormatada.match(regexZona)

    if (match) {
        const zona = match[1]
        dataFormatada = dataFormatada.replace(zona, `(${zona})`)
    }

    return dataFormatada
}

