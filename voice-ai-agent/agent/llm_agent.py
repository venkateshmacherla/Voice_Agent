def process_text(text: str) -> str:
    text_lower = text.lower()
    if "book" in text_lower:
        return "Your appointment has been booked."
    elif "cancel" in text_lower:
        return "Your appointment has been cancelled."
    elif "reschedule" in text_lower:
        return "Your appointment has been rescheduled."
    else:
        return "Sorry, I didn’t understand your request."
