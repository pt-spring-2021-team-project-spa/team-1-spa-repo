export default function MetMuseumQuiz() {
return `
<div class="met__container">
<div id="game" class="justify_center flex_column">
    <div id="met_display">
        <div class="met_display__item">
            <p id="progress_text" class="met_display__prefix">
                Question
            </p>
            <div id="progress_bar">
                <div id="progress_bar_full"></div>
            </div>
        </div>
        <div class="met_display__item">
            <p class="met_display__prefix">
                Score
            </p>
            <h1 class="met_display__main_text" id="score">
                0
            </h1>
        </div>
    </div>
    <h1 id="question"></h1>
    <div class="choice_container">
        <p class="choice_prefix"></p>
        <p class="choice_text" data-number="1"></p>
    </div>
    <div class="choice_container">
        <p class="choice_prefix"></p>
        <p class="choice_text" data-number="2"></p>
    </div>
    <div class="choice_container">
        <p class="choice_prefix"></p>
        <p class="choice_text" data-number="3"></p>
    </div>
    <div class="choice_container">
        <p class="choice_prefix"></p>
        <p class="choice_text" data-number="4"></p>
    </div>
</div>
</div>`
}