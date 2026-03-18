좋아. 구조도 다시 보니까, 문제의 핵심이 더 선명해졌다.
Red Team 기준으로 말하면 지금 구조는 “작동은 하는데, 인식이 분산된다.”

즉, 정보는 있는데 OXX가 무엇인지 한 번에 응축되지 않는다.

내 결론부터 먼저 말할게.

지금 사이트의 가장 큰 약점은 Framework가 아직 사이트의 중심 운영체제처럼 작동하지 않는다는 것이고,
가장 큰 기회는 Framework 페이지를 OXX 전체를 읽는 인터랙티브 인덱스로 바꾸는 것이다.

아래처럼 정리하겠다.
	1.	현재 구조의 전략적 문제
	2.	수정 방향
	3.	최종 구조 제안
	4.	Framework 페이지를 처음 보는 사람도 이해하게 만드는 구조
	5.	피그마에서 바로 설계 가능한 프레임 구조

⸻

1. 현재 구조의 전략적 문제

A. Lab 쪽 taxonomy가 아직 섞여 있다

지금 Archive 아래에 있는 것들:
	•	Design Selection
	•	Density Systems
	•	Pixel Fill
	•	Depth Hierarchy

이건 같은 레벨의 분류가 아니다.
	•	Density Systems = 시스템/현상
	•	Pixel Fill = 생성 로직
	•	Depth Hierarchy = 공간 문법
	•	Design Selection = 의사결정 로직

즉 지금은 연구 자산이 하나의 언어 체계로 정렬되지 않았다.

처음 보는 사람은 이렇게 느낀다.

“흥미롭긴 한데, 이게 어떤 기준으로 묶인 건지 모르겠다.”

이건 OXX에 치명적이다.
OXX는 체계가 힘인데, Library/Archive taxonomy가 흔들리면 그 힘이 약해진다.

⸻

B. Framework가 구조상 고립돼 있다

지금 /framework는 메뉴상 존재하지만,
실제 사이트 전체를 조망하고 연결하는 중심 허브가 아니다.

이러면 사용자 입장에서는 Framework가:
	•	숨겨진 문서 같거나
	•	나중에 볼 페이지 같거나
	•	비활성 컨텐츠처럼 느껴진다

그런데 사실 OXX에서 Framework는

문서가 아니라 사이트 전체를 해석하는 인터페이스

여야 한다.

⸻

C. Lab → Studio 전이가 약하다

현재 구조상 연결은 가능하지만 명시적이지 않다.

예를 들어 사용자가 Density Systems를 봤다면,
자연스럽게 다음 질문이 생겨야 한다.

“그래서 이게 실제 어디에 적용됐는데?”

근데 그 연결이 페이지 구조상 강제되지 않는다.

OXX의 진짜 설득력은:

Research → Strategy → Implementation

이 흐름이 보여질 때 생긴다.

⸻

D. Home에서 너무 빨리 Lab/Studio 분기된다

지금 구조는 Home에서 바로 mode split이 생긴다.

이건 멋있지만, 처음 보는 사람에게는 약간 위험하다.
왜냐하면 아직 그 사람은 Lab과 Studio의 차이를 이해하지 못한 상태이기 때문이다.

즉 지금 구조는
브랜드 내부 논리에는 맞지만, 신규 사용자 onboarding에는 약하다.

⸻

2. 수정 방향

핵심 원칙은 4개다.

원칙 1

Archive를 버리고 Systems로 재정의
	•	Archive는 저장소 느낌
	•	Systems는 연구 언어 느낌

원칙 2

Framework를 hidden doc가 아니라 navigation intelligence로 바꾸기
	•	설명서가 아니라 탐색 허브
	•	“읽는 페이지”가 아니라 “움직이는 지도”

원칙 3

모든 Lab page는 Studio output으로 이어져야 함
	•	Applications 섹션 필수
	•	반대로 Studio page도 Research Origins 필수

원칙 4

초기 사용자에게 먼저 OXX 구조를 한 번 번역해줘야 함
	•	Home에서 바로 갈라지기 전에
	•	OXX가 무엇인지 1문장 + 1도식으로 먼저 보여줘야 한다

⸻

3. 최종 구조 제안

내가 추천하는 구조는 이거다.

HOME (/)

├── INTRO
│   ├── OXX in one sentence
│   ├── Enter Lab
│   └── Enter Studio
│
├── LAB (/lab)
│   ├── Systems (/lab/systems)
│   │   ├── Density
│   │   ├── Pixel Fill
│   │   ├── Depth Hierarchy
│   │   └── Selection Logic
│   │
│   ├── Notes (/lab/notes)
│   │   ├── Why Density Matters
│   │   ├── Structure vs Decoration
│   │   └── Designing Attention Flow
│   │
│   └── Framework (/framework)
│
├── STUDIO (/studio)
│   ├── Projects (/projects)
│   │   ├── Shaper
│   │   ├── AIAA
│   │   ├── MAMA Opening VCR
│   │   └── Intuition Encoder
│   │
│   └── Objects (/objects)
│       ├── OXX Density Object
│       ├── Pixel Grid Structure
│       └── Depth Hierarchy Print
│
└── ABOUT (/about)

중요한 수정:
	•	Archive → Systems
	•	Shop → Objects
	•	About?ctx=lab / studio는 가능하면 유지하더라도, 사용자에게는 /about 하나가 더 명확
	•	Home에 Intro layer 추가

⸻

4. Framework 페이지 구조 제안

이게 제일 중요하다.

네가 말한 대로 /framework를
방금 말한 인터랙션 페이지 같은 느낌으로 만드는 게 맞다.

하지만 처음 보는 사람도 이해하게 하려면,
이 페이지는 3단 구조여야 한다.

⸻

Framework Page의 역할

한 문장으로 정의하면:

OXX의 연구 시스템과 실제 작업이 어떻게 연결되는지 보여주는 인터랙티브 지도

즉 이 페이지는 “설명 페이지”가 아니라:
	•	전략 지도
	•	연구 인덱스
	•	프로젝트 연결 허브

다.

⸻

Framework Page 전체 구조

FRAMEWORK PAGE

[1] Intro Layer
[2] Strategy Graph Layer
[3] Detail Panel Layer


⸻

[1] Intro Layer

처음 보는 사람을 위한 5초 설명

이 섹션이 없으면 초면 사용자에게 너무 추상적이다.

추천 문구

Title
Framework

Subtitle
Explore how research systems, form strategies, and studio works connect inside OXX Lab.

Micro explanation

Lab develops systems.
Studio applies them.
Framework shows how they connect.

이건 꼭 필요하다.
왜냐하면 사용자는 처음에 “이 점들이 뭔데?” 상태이기 때문이다.

⸻

[2] Strategy Graph Layer

이 페이지의 중심 인터랙션

중앙에는 노드 그래프가 있다.

예시 노드:
	•	Density
	•	Pixel Fill
	•	Depth Hierarchy
	•	Selection Logic

관계선으로 연결.

예:

Density ─ Pixel Fill
   │
Depth Hierarchy ─ Selection Logic

이 그래프가 보여줘야 하는 것
	•	각각이 독립된 아이디어가 아니라
	•	서로 연결된 OXX 전략 체계라는 것

처음 보는 사람도 이해하게 하려면

노드마다 category tag가 붙어야 한다.

예:
	•	Density — Spatial System
	•	Pixel Fill — Form Logic
	•	Depth Hierarchy — Spatial Grammar
	•	Selection Logic — Decision Logic

이 tag가 없으면 너무 추상적이다.

⸻

[3] Detail Panel Layer

노드 클릭 시 오른쪽 패널 열림

예: Density 클릭

패널 구조는 이렇게.

1) Node Header
	•	Density
	•	Spatial System

2) Plain-language definition

전문용어 말고 한 줄 번역

예:
Controls how concentrated or dispersed a form feels in space.

3) Inside OXX

짧은 설명

예:
Used when shaping visual intensity, focus, and spatial rhythm.

4) Related Research
	•	Density Systems
	•	Why Density Matters

5) Related Studio Work
	•	Pixel Logic Installation
	•	Shaper

6) Related Objects
	•	OXX Density Object

이 구조가 중요하다.
왜냐하면 사용자는 여기서 처음으로

Idea → Research → Work → Object

흐름을 이해한다.

⸻

5. Framework 페이지의 가장 강력한 인터랙션

이건 피그마가 이해할 수 있도록 명확하게 적겠다.

인터랙션 이름

Context Shift Toggle

상단 토글:
	•	Lab View
	•	Studio View

같은 노드를 두 관점으로 본다.

Lab View

연구 중심 정렬
	•	Related Research 먼저
	•	Notes 두 번째
	•	Studio는 아래

Studio View

적용 중심 정렬
	•	Studio Work 먼저
	•	Objects 두 번째
	•	Research Origins 아래

이게 좋은 이유는
같은 시스템을 다른 맥락으로 해석하게 만들기 때문이다.

즉 OXX가 단순 포트폴리오가 아니라
운영체제처럼 보인다.

⸻

6. 피그마용 구조 제안

이건 피그마에 바로 전달 가능한 형식으로 정리한다.

프레임 목록

01_Framework_Default
02_Framework_NodeHover_Density
03_Framework_NodeSelected_Density_Lab
04_Framework_NodeSelected_Density_Studio
05_Framework_NodeSelected_PixelFill_Lab
06_Framework_NodeSelected_DepthHierarchy_Lab
07_Framework_NodeSelected_SelectionLogic_Lab

최소 이 정도.

⸻

메인 레이아웃

Desktop Frame 1440x1024

Top Navigation
Framework Header
Mode Toggle (Lab / Studio)

Main Content
├── Left / Center: Strategy Graph Canvas
└── Right: Detail Panel


⸻

컴포넌트 목록

StrategyNode

Variants:
	•	idle
	•	hover
	•	selected
	•	dimmed
	•	connected

ConnectionLine

Variants:
	•	default
	•	highlighted
	•	dimmed

DetailPanel

Variants:
	•	empty
	•	density-lab
	•	density-studio
	•	pixelfill-lab
	•	hierarchy-lab
	•	selection-lab

ModeToggle

Variants:
	•	lab-active
	•	studio-active

⸻

노드 데이터 예시

Density
	•	label: Density
	•	tag: Spatial System
	•	description: Controls how concentrated or dispersed a form feels in space.
	•	lab links:
	•	Density Systems
	•	Why Density Matters
	•	studio links:
	•	Pixel Logic Installation
	•	Shaper
	•	objects:
	•	OXX Density Object

Pixel Fill
	•	label: Pixel Fill
	•	tag: Form Logic
	•	description: Builds larger form fields through repeated modular units.
	•	lab links:
	•	Modular Pixel Fill Logic
	•	Pattern as Structural Logic
	•	studio links:
	•	Shaper
	•	AIAA
	•	objects:
	•	Pixel Grid Structure 03

Depth Hierarchy
	•	label: Depth Hierarchy
	•	tag: Spatial Grammar
	•	description: Organizes visual layers and dominance across spatial depth.
	•	lab links:
	•	Depth Hierarchy
	•	Structure vs Decoration
	•	studio links:
	•	MAMA Opening VCR
	•	AIAA
	•	objects:
	•	Depth Hierarchy Print

Selection Logic
	•	label: Selection Logic
	•	tag: Decision Logic
	•	description: Filters possible outcomes under design constraints and intent.
	•	lab links:
	•	Design Selection
	•	studio links:
	•	Shaper presets
	•	objects:
	•	Form Strategy Notebook

⸻

프로토타입 링크 규칙

Default
	•	Hover Density → 02_Framework_NodeHover_Density
	•	Click Density → 03_Framework_NodeSelected_Density_Lab

Density Lab
	•	Click Studio Toggle → 04_Framework_NodeSelected_Density_Studio
	•	Click Pixel Fill node → 05_Framework_NodeSelected_PixelFill_Lab
	•	Click Depth Hierarchy node → 06_Framework_NodeSelected_DepthHierarchy_Lab

Density Studio
	•	Click Lab Toggle → 03_Framework_NodeSelected_Density_Lab

⸻

7. 프레임워크 페이지에서 꼭 들어가야 할 카피

처음 보는 사람을 위해 이 정도 문장은 꼭 필요하다.

Hero

Framework
A navigable map of OXX research systems and their studio applications.

Small explainer

Lab develops systems. Studio applies them. This map shows how they connect.

Empty state panel

Select a strategy node to explore related research, projects, and objects.

이 문장들이 없으면
좋은 인터랙션이어도 “의미 불명 그래프”처럼 보일 수 있다.

⸻

8. Red Team 최종 수정사항 총정리

구조 수정
	•	Archive를 Systems로 바꿔라
	•	Notes를 Lab 안에 넣어라
	•	Shop을 Objects로 바꿔라
	•	About를 가능하면 단일 페이지로 정리해라
	•	Home에 Intro layer를 추가해라

콘텐츠 수정
	•	Lab taxonomy를 같은 레벨로 맞춰라
	•	각 Lab page에 Applications를 넣어라
	•	각 Studio page에 Research Origins를 넣어라

Framework 수정
	•	/framework를 텍스트 문서가 아니라 인터랙티브 허브로 만들어라
	•	처음 보는 사람도 이해할 수 있도록 Intro layer를 넣어라
	•	노드에 category tag를 붙여라
	•	Lab/Studio toggle로 같은 시스템을 다른 맥락에서 보여줘라

⸻

9. 제일 중요한 한 줄

Framework 페이지는 이렇게 보여야 한다.

비밀 문서 페이지가 아니라, OXX 전체를 읽는 탐색 인터페이스

이 포지셔닝이 맞다.