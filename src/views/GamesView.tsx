import React, { useState } from 'react';
import { Unit } from '../types/curriculum';
import { Game } from '../types/game';
import { GameCatalog } from '../components/games/GameCatalog';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';
import { CANONICAL_GAMES_BY_UNIT, CAPSTONE_CHALLENGES_BY_UNIT } from '../data/units';
import { storageService } from '../services/storageService';
import { PerspectiveCaseChallenge } from '../components/games/unit1/PerspectiveCaseChallenge';
import { PerspectiveSwitcher } from '../components/games/unit1/PerspectiveSwitcher';
import { ScaleDetective } from '../components/games/unit1/ScaleDetective';
import { BurgerBlissExpansion } from '../components/games/unit1/BurgerBlissExpansion';
import { BasicAppliedLab } from '../components/games/unit2/BasicAppliedLab';
import { ResearchPipelineBuilder } from '../components/games/unit2/ResearchPipelineBuilder';
import { MethodologyMatcher } from '../components/games/unit2/MethodologyMatcher';
import { StatsSleuth } from '../components/games/unit3/StatsSleuth';
import { ChartSelectorShowdown } from '../components/games/unit3/ChartSelectorShowdown';
import { QualitativeThemeCoder } from '../components/games/unit3/QualitativeThemeCoder';
import { ForestOrTree } from '../components/games/unit4/ForestOrTree';
import { SynthesisMethodMatrix } from '../components/games/unit4/SynthesisMethodMatrix';
import { ConnectingTheDots } from '../components/games/unit4/ConnectingTheDots';
import { GroupthinkBuster } from '../components/games/unit5/GroupthinkBuster';
import { IndonesianEtiquetteChallenge } from '../components/games/unit5/IndonesianEtiquetteChallenge';
import { SmartGoalForge } from '../components/games/unit5/SmartGoalForge';
import { QuestionDoctor } from '../components/games/unit6/QuestionDoctor';
import { SurveyBuilderMaster } from '../components/games/unit6/SurveyBuilderMaster';
import { NeutralityTrial } from '../components/games/unit6/NeutralityTrial';
import { LogicMasterDIA } from '../components/games/unit7/LogicMasterDIA';
import { ToulminArchitectureBuilder } from '../components/games/unit7/ToulminArchitectureBuilder';
import { FallacyPatrol } from '../components/games/unit7/FallacyPatrol';
import { EvidenceTierRater } from '../components/games/unit8/EvidenceTierRater';
import { CraapSiftFactChecker } from '../components/games/unit8/CraapSiftFactChecker';
import { FieldObserverProtocol } from '../components/games/unit8/FieldObserverProtocol';
import { ClaimClassifier } from '../components/games/unit9/ClaimClassifier';
import { AssumptionUnmasker } from '../components/games/unit9/AssumptionUnmasker';
import { EchoChamberBreaker } from '../components/games/unit9/EchoChamberBreaker';
import { ConclusionMatrixArchitect } from '../components/games/unit10/ConclusionMatrixArchitect';
import { ValidityJudge } from '../components/games/unit10/ValidityJudge';
import { HypothesisFate } from '../components/games/unit10/HypothesisFate';
import { ResearchProjectChallenge } from '../components/games/unit2/ResearchProjectChallenge';
import { DataAnalysisMission } from '../components/games/unit3/DataAnalysisMission';
import { EvidenceSynthesisChallenge } from '../components/games/unit4/EvidenceSynthesisChallenge';
import { ProjectRescueMission } from '../components/games/unit5/ProjectRescueMission';
import { QuestionDesignLab } from '../components/games/unit6/QuestionDesignLab';
import { ReasoningUnderPressure } from '../components/games/unit7/ReasoningUnderPressure';
import { EvidenceVerificationMission } from '../components/games/unit8/EvidenceVerificationMission';
import { ClaimCounterargumentArena } from '../components/games/unit9/ClaimCounterargumentArena';
import { FinalConclusionBoard } from '../components/games/unit10/FinalConclusionBoard';
import { PlannedGamePlaceholder } from '../components/games/PlannedGamePlaceholder';

export interface GamesViewProps {
  unit: Unit;
  onExit: () => void;
  isClassroomMode: boolean;
}

export const GamesView: React.FC<GamesViewProps> = ({
  unit,
  onExit,
  isClassroomMode
}) => {
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  // Authoritative canonical micro-games and capstones from the curriculum registry
  const microGames: Game[] = CANONICAL_GAMES_BY_UNIT[unit.number] || [];
  const capstones: Game[] = CAPSTONE_CHALLENGES_BY_UNIT[unit.number] || [];
  const allUnitGames: Game[] = [...microGames, ...capstones];

  // Specific Game Dispatcher driven strictly by game.id
  const renderActiveGame = () => {
    if (!activeGame) return null;

    switch (activeGame.id) {
      // Unit 1 Micro-Game: Perspective Switcher
      case 'g1-1':
        return (
          <PerspectiveSwitcher
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 1 Micro-Game: Scale Detective
      case 'g1-2':
        return (
          <ScaleDetective
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 1 Micro-Game: Burger Bliss Global Expansion
      case 'g1-3':
        return (
          <BurgerBlissExpansion
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 1 Capstone Challenge
      case 'g1-case':
        return (
          <PerspectiveCaseChallenge
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(1, 'g1-case', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 2 Micro-Game 1: Basic vs Applied Lab
      case 'g2-1':
        return (
          <BasicAppliedLab
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 2 Micro-Game 2: Research Pipeline Builder
      case 'g2-2':
        return (
          <ResearchPipelineBuilder
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 2 Micro-Game 3: Methodology Matcher
      case 'g2-3':
        return (
          <MethodologyMatcher
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 2 Capstone Challenge
      case 'g2-project':
        return (
          <ResearchProjectChallenge
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(2, 'g2-project', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 3 Micro-Game 1: Stats Sleuth
      case 'g3-1':
        return (
          <StatsSleuth
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 3 Micro-Game 2: Chart Selector Showdown
      case 'g3-2':
        return (
          <ChartSelectorShowdown
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 3 Micro-Game 3: Qualitative Theme Coder
      case 'g3-3':
        return (
          <QualitativeThemeCoder
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 3 Capstone Challenge: Data Analysis Mission
      case 'g3-capstone':
        return (
          <DataAnalysisMission
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(3, 'g3-capstone', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 4 Micro-Game 1: Forest or Tree?
      case 'g4-1':
        return (
          <ForestOrTree
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 4 Micro-Game 2: Synthesis Method Matrix
      case 'g4-2':
        return (
          <SynthesisMethodMatrix
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 4 Micro-Game 3: Connecting the Dots
      case 'g4-3':
        return (
          <ConnectingTheDots
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 4 Capstone Challenge: Evidence Synthesis Challenge
      case 'g4-capstone':
        return (
          <EvidenceSynthesisChallenge
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(4, 'g4-capstone', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 5 Micro-Game 1: Groupthink Buster
      case 'g5-1':
        return (
          <GroupthinkBuster
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 5 Micro-Game 2: Indonesian Etiquette Challenge
      case 'g5-2':
        return (
          <IndonesianEtiquetteChallenge
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 5 Micro-Game 3: SMART Goal Forge
      case 'g5-3':
        return (
          <SmartGoalForge
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 5 Capstone Challenge: Project Rescue Mission
      case 'g5-capstone':
        return (
          <ProjectRescueMission
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(5, 'g5-capstone', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 6 Micro-Game 1: Question Doctor
      case 'g6-1':
        return (
          <QuestionDoctor
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 6 Micro-Game 2: Survey Builder Master
      case 'g6-2':
        return (
          <SurveyBuilderMaster
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 6 Micro-Game 3: Neutrality Trial
      case 'g6-3':
        return (
          <NeutralityTrial
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 6 Capstone Challenge: Question Design Lab
      case 'g6-capstone':
        return (
          <QuestionDesignLab
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(6, 'g6-capstone', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 7 Micro-Game 1: Logic Master: D-I-A
      case 'g7-1':
        return (
          <LogicMasterDIA
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 7 Micro-Game 2: Toulmin Architecture Builder
      case 'g7-2':
        return (
          <ToulminArchitectureBuilder
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 7 Micro-Game 3: Fallacy Patrol
      case 'g7-3':
        return (
          <FallacyPatrol
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 7 Capstone Challenge: Reasoning Under Pressure
      case 'g7-capstone':
        return (
          <ReasoningUnderPressure
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(7, 'g7-capstone', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 8 Micro-Game 1: Evidence Tier Rater
      case 'g8-1':
        return (
          <EvidenceTierRater
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 8 Micro-Game 2: CRAAP & SIFT Fact-Checker
      case 'g8-2':
        return (
          <CraapSiftFactChecker
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 8 Micro-Game 3: Field Observer Protocol
      case 'g8-3':
        return (
          <FieldObserverProtocol
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 8 Capstone Challenge: Evidence Verification Mission
      case 'g8-capstone':
        return (
          <EvidenceVerificationMission
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(8, 'g8-capstone', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 9 Micro-Game 1: Claim Classifier
      case 'g9-1':
        return (
          <ClaimClassifier
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 9 Micro-Game 2: Assumption Unmasker
      case 'g9-2':
        return (
          <AssumptionUnmasker
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 9 Micro-Game 3: Echo Chamber Breaker
      case 'g9-3':
        return (
          <EchoChamberBreaker
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 9 Capstone Challenge: Claim and Counterargument Arena
      case 'g9-capstone':
        return (
          <ClaimCounterargumentArena
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(9, 'g9-capstone', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 10 Micro-Game 1: Conclusion Matrix Architect
      case 'g10-1':
        return (
          <ConclusionMatrixArchitect
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 10 Micro-Game 2: Validity Judge
      case 'g10-2':
        return (
          <ValidityJudge
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 10 Micro-Game 3: Hypothesis Fate
      case 'g10-3':
        return (
          <HypothesisFate
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Unit 10 Capstone Challenge: Final Conclusion Board
      case 'g10-capstone':
        return (
          <FinalConclusionBoard
            onExit={() => setActiveGame(null)}
            onComplete={(score) => storageService.saveGameScore(10, 'g10-capstone', score)}
            isClassroomMode={isClassroomMode}
          />
        );

      // Canonical Micro-Games (Planned / Coming Soon)
      // Canonical dispatch for all other games strictly renders their own blueprint placeholder
      default:
        return (
          <PlannedGamePlaceholder
            game={activeGame}
            onExit={() => setActiveGame(null)}
            isClassroomMode={isClassroomMode}
          />
        );
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Home', onClick: onExit },
          { label: `Unit ${unit.number}: ${unit.title}`, onClick: onExit },
          { label: activeGame ? activeGame.title : 'Educational Games' }
        ]}
        isClassroomMode={isClassroomMode}
      />

      {activeGame ? (
        renderActiveGame()
      ) : (
        <GameCatalog
          unitNumber={unit.number}
          unitTitle={unit.title}
          microGames={microGames}
          capstones={capstones}
          onPlayGame={(gameId) => {
            const selected = allUnitGames.find((g) => g.id === gameId);
            if (selected) setActiveGame(selected);
          }}
          onExit={onExit}
          isClassroomMode={isClassroomMode}
        />
      )}
    </div>
  );
};
