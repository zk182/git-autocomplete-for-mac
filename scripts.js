const { exec } = require("child_process");


module.exports = {
    scriptsDownload: function() {
        const dir = 'mkdir -p ~/.zsh';
        const cd = 'cd ~/.zsh ';
        const curls = 'curl -o git-completion.bash https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash && curl -o _git https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.zsh';

        exec(`${dir} && ${cd} && ${curls}`,  (error, _stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
        });
    }
}