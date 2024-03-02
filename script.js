 document.getElementById('btn').addEventListener('click', async function() {
            const text = document.getElementById('text').value;
            const delay = document.getElementById('delay').value;

            if (!text || !delay) {
                alert('Please enter text and delay');
                return;
            }

            await delayFunction(delay);
            document.getElementById('output').innerText = text;
        });

        function delayFunction(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }