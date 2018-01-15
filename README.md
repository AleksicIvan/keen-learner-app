# KEEN LEARNER APP
Clone the repo in directory with video files. The files should start w/ 01, 02...
First run `npm run read-dir` to get video files from directory where you cloned project.
Then run `npm run lint`, `npm run dev` and `npm run app` in separate terminals.
Running lint is not required unless you would like to change code.

If you are using tmux + tmuxinator there is tmuxinator config file.

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

