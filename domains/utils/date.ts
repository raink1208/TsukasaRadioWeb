export function toDateString(dateStr?: Date) {
    if (!dateStr) return;
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}年 ${month}月${day}日`;
}