const sender = process.argv[2]
const review_comment = "LGTM!"

console.log("sender : " + sender)

if (sender === "Sunwoo0110" || sender === "jihooni0914") {
    console.log("Hey " + sender + ", " + review_comment)
}
else {
    console.log("Please wait for review and approve")
}