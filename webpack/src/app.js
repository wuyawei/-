import './style.css';
export default function() {
    let app = document.createElement('div');
    app.id = 'map';
    app.textContent = "Hi Vchat!";
    app.classList.add('red');
    return app;
};