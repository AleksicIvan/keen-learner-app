# KEEN LEARNER APP
Clone the repo. Preferably files should start w/ 01, 02...
First run `npm run read-dir` to get video files from directory where you cloned project.
Then run `npm run lint`, `npm run dev` and `npm run app` in separate terminals.
Running linting is not required unless you would like to change code.

If you are using tmux + tmuxinator there is tmuxinator config file.

_DESIGN:_
  One page. List of clickable links with video names and when clicked open video modal.
  List shows just links with current state of the video (watched or not).


_ARCHITECTURE:_
  1. Node.js w/ express ->
    - Initially reads from file structure and creates an arr consisting of video file names
    - Simple node REST API for reading from level DB and serving json to react client

  2. level DB

  3. React for UI

  # TODO:
  - Make it full Electron app - for now you can switch to add-electron branch and run `npm run electron` after you've already started server and client.
  - CLIENT/SERVER: Add notes feature, so user can add some info about watched video
