# 🚀 Quick Deploy Guide

## 배포 완료 체크리스트

- [x] 퀴즈 코드 작성 완료
- [x] Git 저장소 초기화
- [x] 로컬 커밋 완료
- [ ] GitHub 저장소 생성
- [ ] GitHub Pages 활성화
- [ ] 공유 및 마케팅

---

## 원클릭 배포 (GitHub CLI 사용)

```bash
cd /Users/dongheehan/.openclaw/workspace/meme-quiz-2025

# 1. GitHub CLI 인증 (한 번만)
gh auth login

# 2. 저장소 생성 & Push & Pages 활성화
gh repo create meme-quiz-2025 \
  --public \
  --source=. \
  --remote=origin \
  --push && \
gh repo edit --enable-pages --default-branch main

# 3. 확인
gh repo view --web
```

**배포 완료!** 🎉
- URL: https://DongheeH14933.github.io/meme-quiz-2025/

---

## 수동 배포 (웹사이트 사용)

### 1단계: GitHub 저장소 생성
1. https://github.com/new 접속
2. Repository name: `meme-quiz-2025`
3. Public 선택
4. **Create repository** 클릭

### 2단계: 코드 Push
```bash
cd /Users/dongheehan/.openclaw/workspace/meme-quiz-2025
git remote add origin https://github.com/YOUR_USERNAME/meme-quiz-2025.git
git push -u origin main
```

### 3단계: GitHub Pages 활성화
1. 저장소 페이지에서 **Settings** 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. Source: **main** branch 선택
4. **Save** 클릭
5. 2-3분 후 링크 활성화

**배포 완료!** 🎉

---

## 배포 확인

```bash
# 저장소 확인
gh repo view --web

# Pages 상태 확인
curl -I https://YOUR_USERNAME.github.io/meme-quiz-2025/
```

---

## 다음 단계: 마케팅

### Reddit
```
r/memes, r/dankmemes에 포스트:
"I made a quiz about 2025's viral memes! Can you get a perfect score? 🔥"
```

### Twitter/X
```
🔥 2025 Meme Quiz is LIVE!

Think you know your memes? Test yourself:
[링크]

Topics: 6-7, gorilla debate, Anthropologie rock, and more!

Can you get 12/12? 😎 #MemeQuiz #2025Memes
```

### TikTok
- 퀴즈 화면 녹화
- "POV: trying the 2025 meme quiz"
- 점수 결과 보여주기

---

## 수익화 준비

### Google AdSense 신청 조건
- ✅ 오리지널 콘텐츠
- ⏳ 안정적 트래픽 (1000+ 방문자/일)
- ✅ 정책 준수

### AdSense 코드 추가 위치
`index.html` 파일:
- Line 14-16: Header ad slot
- Line 37-39: Top ad space
- Line 68-70: Bottom ad space

### 예상 수익 (CPM $2-5 기준)
- 10K 방문/월: $20-50
- 50K 방문/월: $100-250
- 100K 방문/월: $200-500
- Viral 성공 시: $1000+

---

## 문제 해결

### 문제: Pages가 활성화되지 않음
```bash
# .nojekyll 파일 추가
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll for GitHub Pages"
git push
```

### 문제: 404 에러
- 2-3분 기다리기 (빌드 시간)
- Settings → Pages에서 올바른 branch 선택 확인

### 문제: CSS가 로드되지 않음
- 브라우저 캐시 클리어
- Hard refresh (Cmd+Shift+R)

---

## 업데이트 방법

새로운 질문 추가 또는 수정:
```bash
cd /Users/dongheehan/.openclaw/workspace/meme-quiz-2025
# script.js 파일 수정
git add .
git commit -m "Update: add new questions"
git push
```

GitHub Pages는 자동으로 업데이트됩니다!

---

**준비 완료! 언제든지 배포하실 수 있습니다.** 🚀
