# KEEN LEARNER APP
Clone the repo in directory with video files. The files should start w/ 01, 02...
First run `npm run read-dir` to get video files from directory where you cloned project.
Then run `npm run lint`, `npm run dev` and `npm run app` in separate terminals.
Running lint is not required unless you would like to change code.

If you are using tmux + tmuxinator there is tmuxinator config file.

_DESIGN:_
  One page. List of clickable links with video names and when clicked open video modal.
  List shows just links with current state of the video (watched or not).

  # TODO:
 - SERVER: Read nested folders not just root
 - CLIENT/SERVER: Add notes feature, so user can add some info about watched video


_ARCHITECTURE:_
  1. Node.js w/ express ->
    - Initially reads from file structure and creates an arr consisting of videos file names

  2. React

_IDEAS:_
  1. Make it full Electron app - for now you can switch to add-electron branch and run `npm run electron` after you've already started server and client.
