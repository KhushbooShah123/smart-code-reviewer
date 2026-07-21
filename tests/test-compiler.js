const puppeteer = require('puppeteer');

(async () => {
    console.log('🚀 Starting E2E Compiler Test...');
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();

    try {
        // 1. Website load karo
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
        console.log('✅ Website loaded successfully');

        // 2. Code type karo
        const testCode = `int main() { int a = 5; return a; }`;
        await page.type('#codeInput', testCode);
        console.log('✅ Code typed');

        // 3. Analyze button click karo
        await page.click('#analyzeBtn');
        
        // 4. Wait for results to appear (Tokens wala card)
        await page.waitForSelector('#tokenList .token-summary', { timeout: 10000 });
        console.log('✅ Analysis completed');

        // 5. Check stats (Variables count should be > 0)
        const varCount = await page.$eval('#statVars', el => el.innerText);
        if (parseInt(varCount) > 0) {
            console.log(`✅ Compiler detected ${varCount} variables correctly`);
        } else {
            throw new Error('Compiler failed to detect variables');
        }

        console.log('\n🎉 ALL TESTS PASSED!');
        process.exit(0);

    } catch (error) {
        console.error('\n❌ TEST FAILED:', error.message);
        process.exit(1);
    } finally {
        await browser.close();
    }
})();