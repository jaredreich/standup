# Standup App

## Usage

Query string params:

`list` → list items (may prepend list items with "-" to get a separator/title, must be URL encoded)
`notes` → notes (plain text or HTML, must be URL encoded)
`image` → set background image topic (image from unsplash.com, rotated daily)
`color` → set active speaker background color (CSS color, hex or other, must be URL encoded)

When you're done, save it as a bookmark for next time!

Basic example:

```
?list=-group1,name1,name2,-group2,name3,name4&notes=Here%20are%20some%20notes.&image=nature&color=pink
```

Advanced example:

```
?list=-Group%201%2CName%201%2CName%202%2C-Group%202%2CName%203%2CName%204&notes=%3Cdiv%3E%3Cb%3EGuidelines%3A%3C%2Fb%3E%3Cdiv%3E-%20What%20are%20you%20%3Ci%3Eworking%3C%2Fi%3E%20on%3F%3C%2Fdiv%3E%3Cdiv%3E-%20What%20are%20you%20%3Ci%3Eblocked%3C%2Fi%3E%20on%3F%3C%2Fli%3E%3C%2Ful%3E%3C%2Fdiv%3E
```

Screenshot:

<img src="./screenshot.png" width="600" alt="Screenshot">

## License

MIT
