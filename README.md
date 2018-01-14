# KEEN LEARNER APP
This app should be installed in dir with video files. The files should start w/ 01, 02...

_DESIGN:_
  Three pages. Landing, List of videos and Single video page.
  List shows just links with checkboxes (watched or not).
  Single page lets you add comment (textarea) for future reference.

  # TODO:
 - SERVER: It should keep state of finished/watched videos in a record file (It reads from there intially).
 - SERVER: After reading dir, write to record.json file
 - CLIENT: After watching check watched autmatically, send PUT to update record.json
 - SERVER: Read nested folders not just root


_ARCHITECTURE:_
  1. Node.js w/ express ->
    - Initially reads from file structure and creates an arr consisting of videos file names

  2. React

_IDEAS:_
  1. Make it Electron app

