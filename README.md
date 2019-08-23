# Standup App

## Usage

To preset list items, append the url with a query string parameter "list". You can also prepend a list item with "-" to get a separator/title.

To preset notes, append the url with a query string parameter "notes" (it can be plain text or HTML)

Values in both `list` and `notes` query parameters must be URL encoded.

When you're done, save it as a bookmark for next time!

Basic example:

```
?list=-group1,name1,name2,-group2,name3,name4&notes=Here%20are%20some%20notes.
```

Advanced example:

```
?list=-Group%201%2CName%201%2CName%202%2C-Group%202%2CName%203%2CName%204&notes=%3Cdiv%3E%3Cb%3EGuidelines%3A%3C%2Fb%3E%3Cdiv%3E-%20What%20are%20you%20%3Ci%3Eworking%3C%2Fi%3E%20on%3F%3C%2Fdiv%3E%3Cdiv%3E-%20What%20are%20you%20%3Ci%3Eblocked%3C%2Fi%3E%20on%3F%3C%2Fli%3E%3C%2Ful%3E%3C%2Fdiv%3E
```

Screenshot:

<img src="./screenshot.png" width="600" alt="Screenshot">

## License

MIT
