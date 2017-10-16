# COURSE HELPER
This app  should be installed in dir with video files (later: add with many folders).
And render a page where you can play videos and check if finsihed or not.
It should keep state of finished/watched videos in a record file (It reads from there intially).

_DESIGN:_
  Three pages. Landing, List of videos and Single video page.
  List shows just links with checkboxes (watched or not).
  Singled page lets you add comment (textarea) for future reference.

_ARCHITECTURE:_
  1. Node.js w/ express ->
    - Initially reads from file structure and creates an arr consisting of videos file names
    - On req it serves the file from directory

  2. React (w/ React Router)

_NOTES:_
  - Read from file names (prerequisit is starting w/ 01, 02...) and order links accordingly
  - To detect only files that are actually videos

_IDEAS:_
  1. Make it Electron app
  2. _CHECKED_ - Maybe three pages, Landing ('Start (if not one of videos is checked) Continue learning (name of the course) ') * Name of the course is given by a user and it is saved in that record file

