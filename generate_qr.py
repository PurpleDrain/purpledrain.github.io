import qrcode

attendants = {
}

for attendant, url in attendants.items():
    img = qrcode.make(url)
    img.save(f"qr_codes/{attendant}.png")
